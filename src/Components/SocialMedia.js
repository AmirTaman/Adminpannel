import { Icon } from "bootstrap";
function SocialMedia(props) {
  return (
    <div>
      <a href={props.url} target="_blank">
        <Icon
          link
          name={props.icon}
          size="large"
          style={{
            "background-clip": "text",
            background: `-moz-linear-gradient(${props.color})`,
            background: `-webkit-linear-gradient(${props.color})`,
            background: `linear-gradient(${props.color})`,
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        />
      </a>
    </div>
  );
}

export default SocialMedia;
