import axiosClient from './axiosClient';

const productApi = {
  async getAll(params) {
    const url = '/products';
    const newParams = { ...params };
    newParams._start = !newParams._page || newParams._page < 1 ? 0 : (newParams._page - 1) * (newParams._limit || 50);
    delete newParams._page;

    const productList = await axiosClient.get(url, { params: newParams });
    const count = await axiosClient.get(`${url}/count`, { params: newParams });

    return {
      data: productList,
      pagination: {
        _page: params._page,
        _limit: params._limit,
        _total: count,
      },
    };
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.get(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
