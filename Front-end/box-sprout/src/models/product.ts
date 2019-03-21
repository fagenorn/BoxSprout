import Vue from "vue";
import i18n from "@/i18n";
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

  private config(): AxiosRequestConfig {
    return {
      headers: {
        "Content-Language": i18n.locale
      }
    };
  }

  public async getProducts(): Promise<ProductResponse[]> {
    let response = await Vue.axios.get("/products", this.config());
    this.products = response.data.data;
    return this.products;
  }

  public async getProduct(id: Number): Promise<ProductResponse> {
    let response = await Vue.axios.get("/products/" + id, this.config());
    return response.data.data as ProductResponse;
  }
}

const productManager = new ProductManager();
export default productManager;
