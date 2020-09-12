import TransporteUniversitario from "../models/transporte.universitario";

class TransporteUniversitarioService {

    public async getAll(filter?: any) {
        try {
            return await TransporteUniversitario.find(filter);
        } catch (err) {
            return err;
        }
    }

    public async save(data: any) {
        try {
            const res: any = await new Promise((resolve, reject) => {
                var object = new TransporteUniversitario(data);
                object.save((err, product) => {
                    resolve(product);
                });
            })
            return res;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public async delete(id: any) {
        try {
            return await TransporteUniversitario.deleteOne({ _id: id });
        } catch (err) {
            return err;
        }
    }

}

export default new TransporteUniversitarioService();
