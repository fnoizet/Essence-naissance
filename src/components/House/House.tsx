import Arcan from "../Arcan/Arcan";

export default function House({ arcan }: { arcan?: number }) {
  return <div className="house">{arcan ? <Arcan number={arcan} /> : ""}</div>;
}
