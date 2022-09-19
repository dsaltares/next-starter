type CardProps = {
  title: string;
  text: string;
  link: string;
};

const Card = ({ title, text, link }: CardProps) => (
  <a
    href={link}
    className="m-4 p-6 text-left border border-solid rounded-xl border-gray-900 max-w-[300px] transition-colors hover:text-blue-400 focus:text-blue-400 active:text-blue-400 hover:border-blue-400 focus:border-blue-400 active:border-blue-400"
  >
    <h2 className="mb-4 text-2xl">{title}</h2>
    <p className="text-xl">{text}</p>
  </a>
);

export default Card;
