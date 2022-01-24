import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
    </div>
  )
}
