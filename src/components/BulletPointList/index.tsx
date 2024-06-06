interface ITextList {
  text: string[];
  classes: string;
}

export const BulletPointList = ({ text, classes }: ITextList) => {
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <ul className={`${classes}`}>
      {textArray.map((item, index) => (
        <li className={`mb-2 mt-2`} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
