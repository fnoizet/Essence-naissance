import "./Arcan.css";

export default function Arcan({ number }: { number: Number }) {
  const styles = {
    backgroundImage: 'url("/assets/' + number + '.png")'
  };
  return <div className="arcanCard" style={styles} title={number}></div>;
}
