import ClienteCrear from "./containers/cliente/ClienteCrear";
import ClienteEditar from "./containers/cliente/ClienteEditar";
import ClienteList from "./containers/cliente/ClienteList";
import ContactoCrear from "./containers/contacto/ContactoCrear";
import ContactoEditar from "./containers/contacto/ContactoEditar";
import ContactoList from "./containers/contacto/ContactoList";

const rutas = [

    { path: '/clientes/crear', componente: ClienteCrear },
    { path: '/clientes/editar/:id', componente: ClienteEditar },
    { path: '/clientes', componente: ClienteList },

    { path: '/clientes/:id/contactos/crear', componente: ContactoCrear },
    { path: '/clientes/:id/contactos/editar/:id', componente: ContactoEditar },
    { path: '/clientes/:id/contactos', componente: ContactoList },
]

export default rutas;