import axios, { AxiosInstance, isAxiosError } from 'axios'
import { HttpAdapter } from './http.adapter'

interface Options {
  baseUrl: string
  params?: Record<string, string>
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    })
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options)
      return data
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`)
      }

      throw new Error(`Unexpected error: ${error}`)
    }
  }
}