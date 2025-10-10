"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Phone,
  Mail,
  Calendar,
  User,
  LogOut,
  Save,
  Users,
  Trash2,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  client_type: string;
  guest_count: string;
  budget_range: string;
  services: string[];
  message: string;
  submitted_at: string;
  status: "pending" | "contacted" | "closed" | "rejected";
  notes?: string;
}

export const AdminPanel = memo(() => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [selectedContact, setSelectedContact] =
    useState<ContactSubmission | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState("");
  const [isUpdatingNotes, setIsUpdatingNotes] = useState(false);
  const fetchContacts = useCallback(async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Error al cargar contactos", {
        description: "No se pudieron cargar los contactos. Inténtelo de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // Nueva función para borrar contacto
  const deleteContact = useCallback(
    async (id: string) => {
      if (!window.confirm("¿Seguro que quieres borrar esta solicitud?")) return;
      try {
        const response = await fetch("/api/contact", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const result = await response.json();
        if (response.ok && result.success) {
          toast.success("Solicitud eliminada");
          setContacts((prev) => prev.filter((c) => c.id !== id));
          if (selectedContact?.id === id) setSelectedContact(null);
        } else {
          toast.error(result.message || "No se pudo borrar la solicitud");
        }
      } catch {
        toast.error("Error de conexión");
      }
    },
    [selectedContact]
  );

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  useEffect(() => {
    if (selectedContact) {
      setNotes(selectedContact.notes || "");
    }
  }, [selectedContact]);

  const updateContactStatus = useCallback(
    async (id: string, status: string) => {
      try {
        const response = await fetch("/api/contact", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, status }),
        });

        if (response.ok) {
          fetchContacts(); // Refresh the list
          if (selectedContact && selectedContact.id === id) {
            setSelectedContact({
              ...selectedContact,
              status,
            } as ContactSubmission);
          }
          toast.success("Estado actualizado", {
            description: `El estado se cambió correctamente.`,
          });
        } else {
          toast.error("Error al actualizar estado", {
            description: "No se pudo actualizar el estado. Inténtelo de nuevo.",
          });
        }
      } catch (error) {
        console.error("Error updating contact status:", error);
        toast.error("Error de conexión", {
          description: "No se pudo conectar con el servidor.",
        });
      }
    },
    [fetchContacts, selectedContact]
  );

  const updateContactNotes = useCallback(
    async (id: string, notes: string) => {
      try {
        setIsUpdatingNotes(true);
        const response = await fetch("/api/contact", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, notes }),
        });

        if (response.ok) {
          fetchContacts(); // Refresh the list
          if (selectedContact && selectedContact.id === id) {
            setSelectedContact({
              ...selectedContact,
              notes,
            });
          }
          toast.success("Notas actualizadas", {
            description: "Las notas se guardaron correctamente.",
          });
        } else {
          toast.error("Error al guardar notas", {
            description:
              "No se pudieron guardar las notas. Inténtelo de nuevo.",
          });
        }
      } catch (error) {
        console.error("Error updating contact notes:", error);
        toast.error("Error de conexión", {
          description: "No se pudo conectar con el servidor.",
        });
      } finally {
        setIsUpdatingNotes(false);
      }
    },
    [fetchContacts, selectedContact]
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200"
          >
            Pendiente
          </Badge>
        );
      case "contacted":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Contactado
          </Badge>
        );
      case "closed":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Cerrado
          </Badge>
        );
      case "rejected":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200"
          >
            Rechazado
          </Badge>
        );
      default:
        return <Badge variant="outline">Desconocido</Badge>;
    }
  };

  const getEventTypeLabel = (eventType: string) => {
    const types: { [key: string]: string } = {
      wedding: "Boda",
      inauguration: "Inauguración",
      corporate: "Evento Corporativo",
      birthday: "Cumpleaños",
      anniversary: "Aniversario",
      private: "Evento Privado",
      other: "Otro",
    };
    return types[eventType] || eventType;
  };

  const getGuestCountLabel = (guestCount: string) => {
    const counts: { [key: string]: string } = {
      "0-20": "0-20 invitados",
      "20-50": "20-50 invitados",
      "51-100": "51-100 invitados",
      "101-150": "101-150 invitados",
      "151-200": "151-200 invitados",
      "201-300": "201-300 invitados",
      "301-500": "301-500 invitados",
      "500+": "Más de 500 invitados",
    };
    return counts[guestCount] || guestCount;
  };

  const getBudgetRangeLabel = (budgetRange: string) => {
    const budgets: { [key: string]: string } = {
      "0-500": "0€ - 500€",
      "500-1000": "500€ - 1.000€",
      "1000-2000": "1.000€ - 2.000€",
      "2000-3500": "2.000€ - 3.500€",
      "3500-5000": "3.500€ - 5.000€",
      "5000-7500": "5.000€ - 7.500€",
      "7500+": "Más de 7.500€",
      flexible: "Flexible / A consultar",
    };
    return budgets[budgetRange] || budgetRange;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p>Cargando contactos...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const serviceLabels: { [key: string]: string } = {
    camareros: "Camareros",
    "barra-bebidas": "Barra de Bebidas",
    "barra-aperitivos": "Barra de Aperitivos",
    "cortador-jamon": "Cortador de Jamón",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Panel de Administración
            </h1>
            <p className="text-gray-600">
              Gestiona las solicitudes de contacto de los clientes
            </p>
          </div>
          <Button
            variant="outline"
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              window.location.href = "/admin/login";
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de contactos */}
          <div className="lg:col-span-2">
            <Card className="pt-4">
              <CardHeader>
                <CardTitle>
                  Solicitudes de Contacto ({contacts.length})
                </CardTitle>
                <CardDescription>
                  Lista de todas las solicitudes recibidas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Evento</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Invitados</TableHead>
                        <TableHead>Presupuesto</TableHead>
                        <TableHead>Servicios</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Recibido</TableHead>
                        <TableHead className="sticky right-0 bg-gray-50 z-10">
                          Acciones
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">
                                {contact.first_name} {contact.last_name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {contact.email}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {getEventTypeLabel(contact.event_type)}
                          </TableCell>
                          <TableCell>
                            {new Date(contact.event_date).toLocaleDateString(
                              "es-ES"
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {getGuestCountLabel(contact.guest_count)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {getBudgetRangeLabel(contact.budget_range)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {contact.services.map((service) => (
                                <Badge
                                  key={service}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {serviceLabels[service] || service}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(contact.status)}
                          </TableCell>
                          <TableCell>
                            {new Date(contact.submitted_at).toLocaleDateString(
                              "es-ES"
                            )}
                          </TableCell>
                          <TableCell className="sticky right-0 bg-gray-50 z-10">
                            <div className="flex flex-col gap-2 items-end">
                              <Button
                                className="cursor-pointer w-[90px] justify-start"
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedContact(contact)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                Ver
                              </Button>
                              <Button
                                className="cursor-pointer w-[90px] justify-start"
                                variant="destructive"
                                size="sm"
                                onClick={() => deleteContact(contact.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Borrar
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detalles del contacto seleccionado */}
          <div className="lg:col-span-1">
            <Card className="py-4">
              <CardHeader>
                <CardTitle>Detalles del Contacto</CardTitle>
                <CardDescription>
                  {selectedContact
                    ? "Información detallada"
                    : "Selecciona un contacto para ver los detalles"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedContact ? (
                  <div className="space-y-6">
                    {/* Información personal */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Información Personal
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Nombre:</strong> {selectedContact.first_name}{" "}
                          {selectedContact.last_name}
                        </p>
                        <p>
                          <strong>Tipo:</strong>{" "}
                          {selectedContact.client_type === "particular"
                            ? "Particular"
                            : "Profesional"}
                        </p>
                      </div>
                    </div>

                    {/* Información de contacto */}
                    <div>
                      <h4 className="font-semibold mb-3">Contacto</h4>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          <a
                            href={`mailto:${selectedContact.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {selectedContact.email}
                          </a>
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <a
                            href={`tel:${selectedContact.phone}`}
                            className="text-blue-600 hover:underline"
                          >
                            {selectedContact.phone}
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Información del evento */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Evento
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Tipo:</strong>{" "}
                          {getEventTypeLabel(selectedContact.event_type)}
                        </p>
                        <p>
                          <strong>Fecha:</strong>{" "}
                          {new Date(
                            selectedContact.event_date
                          ).toLocaleDateString("es-ES")}
                        </p>
                      </div>
                    </div>

                    {/* Información de invitados y presupuesto */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Invitados y Presupuesto
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Invitados:</strong>{" "}
                          {getGuestCountLabel(selectedContact.guest_count)}
                        </p>
                        <p>
                          <strong>Presupuesto:</strong>{" "}
                          {getBudgetRangeLabel(selectedContact.budget_range)}
                        </p>
                      </div>
                    </div>

                    {/* Servicios */}
                    <div>
                      <h4 className="font-semibold mb-3">Servicios</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedContact.services.map((service) => (
                          <Badge
                            key={service}
                            variant="secondary"
                            className="text-xs"
                          >
                            {serviceLabels[service] || service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <h4 className="font-semibold mb-3">Mensaje</h4>
                      <p className="text-sm bg-gray-50 p-3 rounded-md whitespace-pre-wrap break-words">
                        {selectedContact.message}
                      </p>
                    </div>

                    {/* Estado */}
                    <div>
                      <h4 className="font-semibold mb-3">Estado</h4>
                      <Select
                        value={selectedContact.status}
                        onValueChange={(value) =>
                          updateContactStatus(selectedContact.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pendiente</SelectItem>
                          <SelectItem value="contacted">Contactado</SelectItem>
                          <SelectItem value="closed">Cerrado</SelectItem>
                          <SelectItem value="rejected">Rechazado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Notas/Comentarios */}
                    <div>
                      <h4 className="font-semibold mb-3">
                        Notas / Comentarios
                      </h4>
                      <Textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Agregar notas, motivo de rechazo, información adicional..."
                        className="min-h-[80px] text-sm"
                      />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          {selectedContact.notes
                            ? "Última nota guardada"
                            : "Sin notas"}
                        </span>
                        <Button
                          size="sm"
                          onClick={() =>
                            updateContactNotes(selectedContact.id, notes)
                          }
                          disabled={isUpdatingNotes}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <Save className="h-3 w-3" />
                          {isUpdatingNotes ? "Guardando..." : "Guardar"}
                        </Button>
                      </div>
                      {selectedContact.notes && (
                        <div className="mt-2 p-2 bg-gray-50 rounded text-xs break-words overflow-wrap-anywhere">
                          <strong className="block mb-1">Nota actual:</strong>
                          <div className="whitespace-pre-wrap break-words">
                            {selectedContact.notes}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Fecha de recepción */}
                    <div className="text-xs text-gray-500 pt-3 border-t">
                      <p>
                        Recibido:{" "}
                        {new Date(selectedContact.submitted_at).toLocaleString(
                          "es-ES"
                        )}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Selecciona un contacto de la lista para ver sus detalles
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});

AdminPanel.displayName = "AdminPanel";
