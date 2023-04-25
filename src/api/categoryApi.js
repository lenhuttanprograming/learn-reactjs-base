import axiosClient from './axiosClient';

const categoryApi = {
  getAll(param) {
    const url = '/categories';
    return axiosClient.get(url, { param });
  },
  get(id) {
    const url = `/categorie/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/categories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.get(url, data);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
