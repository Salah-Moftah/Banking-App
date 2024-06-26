import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema as formSchema } from "@/lib/utils";

const authFormSchema = formSchema('sign-up');


interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>, 
  inputName: FieldPath<z.infer<typeof authFormSchema>>,
  label: string,
  placeholder: string,
}

const CustomInput = ({ inputName, label, control, placeholder }: CustomInput) => {
  return (
    <>
      <FormField
        control={control}
        name={inputName}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                  type={inputName === 'password' ? 'password' : 'text'}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
