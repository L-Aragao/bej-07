import ClientDTO from "../interface/client.dto";

class ClientService{
    clientEntity: any;

    constructor(){
        this.clientEntity = 'Instanciar a entidade';
    }

    createClient = async (newClient : ClientDTO) => {
        const client = await this.clientEntity.create(newClient);
        return [client];
    }

    findClientByDocument = async (document: string) => {
        const client = await this.clientEntity.findById(document);
        return [client];
    }

    findClients = async () => {
        const clients = await this.clientEntity.findClients();
        return clients;
    }

    updateClient = async (client: ClientDTO) => {
        const updatedClient = await this.clientEntity.update(client);
        return updatedClient;
    }

    deleteClientById = async (client: ClientDTO) => {
        await this.clientEntity.delete(client.id_cliente)
    }

}

export default ClientService;