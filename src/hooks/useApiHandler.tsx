import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";
import axios, { AxiosResponse } from "axios";
import { CheckCircle, XCircle } from "lucide-react";

type AxiosMethod = (
    url: string,
    data?: any
  ) => Promise<AxiosResponse<any>>;
const useApiHandler = () => {
  const { toast } = useToast();

  async function apiCall(
    url: string,
    axiosMethod:AxiosMethod,
    data: object | File | null = null, // Optional data
    
  ) {

    // const loadingToast = toast("Loading",{
    //     descrip
    // })
    const loadingToast = toast({
      title: "Loading",
      action: <FiLoader className="animate-spin" />,
      variant: "loading",
      duration: 1000000, // Long duration for loading
    });

    try {
      // Handle calls with or without data
      const res = data ? await axiosMethod(url, data) : await axiosMethod(url);

      console.log(res);

      if (res.data?.statusCode === 200) {
        loadingToast.dismiss();

        toast({
          title: "Success",
          action: <CheckCircle className="w-5 h-5" />,
          description: res.data?.message || "Request was successful!",
          variant: "success",
          duration: 2000,
        });

        return res.data;
      } else {
        loadingToast.dismiss();

        const errMessage = "Unexpected Error";
        toast({
          title: "Failed",
          description: res.data.message|| errMessage,
          duration: 3000,
          variant: "destructive",
          action: <XCircle />,
        });
      }
    } catch (error) {
      loadingToast.dismiss();

      const errMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "An error occurred while processing your request.";

      toast({
        title: "Failed",
        description: errMessage,
        variant: "destructive",
        duration: 3000,
        
        action: <XCircle />,
      });

      console.error("API Error:", error);
    }
  }

  return apiCall;
};

export default useApiHandler;
