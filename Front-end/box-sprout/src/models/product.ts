import Vue from "vue";
import { AxiosRequestConfig } from "axios";

export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

class ProductManager {
  products = [] as ProductResponse[];

  public async getProducts(): Promise<ProductResponse[]> {
    let response = await Vue.axios.get("/products");
    this.products = response.data.data;
    return this.products;
  }

  public async getProduct(id: Number): Promise<ProductResponse> {
    let response = await Vue.axios.get("/products/" + id);
    return response.data.data as ProductResponse;
  }
}

const productManager = new ProductManager();
export default productManager;
