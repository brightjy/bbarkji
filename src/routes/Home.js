import { useForm } from "react-hook-form";
import Counter from "./Counter";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <Counter />
    </div>
  )
}
