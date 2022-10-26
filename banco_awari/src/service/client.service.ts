import ClientDTO from "../interface/client.dto";
import ClientEntity from "../repository/client.entity";


export default class ClientService{
    clientEntity: ClientEntity;

    constructor(){
        this.clientEntity = new ClientEntity();
    }

    async  createClient (newClient : ClientDTO): Promise<ClientDTO[]> {
        const client = await this.clientEntity.create(newClient);
        return [client];
    }

    findClientByDocument = async (document: string) => {
        const client = await this.clientEntity.findByDocument(document);
        return [client];
    }

    // findClients = async () => {
    //     const clients = await this.clientEntity.findClients();
    //     return clients;
    // }

    updateClient = async (client: ClientDTO) => {
        const updatedClient = await this.clientEntity.update(client);
        return updatedClient;
    }

    deleteClientById = async (client: ClientDTO) => {
        await this.clientEntity.delete(client)
    }

};