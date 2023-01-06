import ReactLoading from "react-loading";
type IProps = {
  width?: number;
  height?: number;
  color?: string;
};
const Loading: React.FC<IProps> = ({
  width = 50,
  height = 50,
  color = "#0052ff",
}) => <ReactLoading height={height} width={width} type="spin" color={color} />;

export default Loading;
