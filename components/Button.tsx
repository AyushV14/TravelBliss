import Image from "next/image"


type ButtonProps = {
    type : 'button' | 'submit';
    title: string;
    icon?: string;
    varient:string;
    full?:boolean;
}
const Button = ({ type, title, varient , icon,full }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${varient} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button