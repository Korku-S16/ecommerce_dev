import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";
import axios, { AxiosResponse } from "axios";
import { CheckCircle, XCircle } from "lucide-react";

type AxiosMethod = (
  url: string,
  data?: any
) => Promise<AxiosResponse<any>>;

const useApiHandler = () => {
  async function apiCall(
    url: string,
    axiosMethod: AxiosMethod,
    data: object | File | null = null
  ) {
    const toastId = toast.loading("Loading...", {
      duration: 5000,
      action:<FiLoader className="animate-spin" />,
      
    });

    try {
      const res = data ? await axiosMethod(url, data) : await axiosMethod(url);

      if (res.data?.statusCode === 200) {
        toast.dismiss(toastId);

        toast.success(res.data?.message || "Request was successful!", {
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
          duration: 2000,
        });
         console.log(res.data)
        return res.data;
      } else {
        toast.dismiss(toastId);

        toast.error(res.data?.message || "Unexpected error occurred.", {
          icon: <XCircle className="text-red-500" />,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.dismiss(toastId);

      const errMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "An error occurred while processing your request.";

      toast.error(errMessage, {
        icon: <XCircle className="text-red-500" />,
        duration: 3000,
      });

      console.error("API Error:", error);
    }
  }

  return apiCall;
};

export default useApiHandler;
