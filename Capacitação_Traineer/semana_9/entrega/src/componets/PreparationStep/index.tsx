interface PreparationStepProps {
  index: number;
  description: string;
}
export default function PreparationStep({
  index,
  description,
}: PreparationStepProps) {
  return (
    <li className="flex gap-2 ">
      <span className=" flex shrink-0 justify-center items-center bg-orange-100 h-6 w-6 rounded-full text-orange-500">
        {index}
      </span>
      <p>{description}</p>
    </li>
  );
}
