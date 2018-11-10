import Model from '../models';
export default class BaseRepository {

    constructor(className) {
        this._model = Model[className];
    }

    async getAll(attributes) {
        try {
            return await this._model.findAll({
                attributes: attributes
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    async create(data) {
        try {
            return await this._model.create(data);
        } catch (e) {
            throw new Error(e);
        }
    }

    async update(id, data) {
        try {
            return await this._model.update(data, {where: {id}});
        } catch (e) {
            throw new Error(e);
        }
    }

    async get(id, attributes) {
        try {
            return await this._model.findById(id, {
                attributes: attributes
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    async remove(id) {
        try {
            return await this._model.destroy({where: {id}});
        } catch (e) {
            throw new Error(e);
        }
    }

}