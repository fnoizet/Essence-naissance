import "./Layout.css";
import House from "../House/House";

type house = {
  number: number;
  arcan: number;
};

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type arcanNumber = IntRange<1, 23>;

function fromNumberToArcan(n: number): arcanNumber {
  if (n <= 22) {
    return n as arcanNumber;
  } else {
    const nSplit = (n + "").split("");
    const toCalc = nSplit.reduce(
      (a, b) => parseInt(a, 10) + parseInt(b, 10) + ""
    );

    return fromNumberToArcan(parseInt(toCalc, 10)) as arcanNumber;
  }
}

function getBirthSent(date: string): house[] {
  const [sYear, sMonth, sDay] = date.split("-");
  const day: number = parseInt(sDay, 10);
  const month: number = parseInt(sMonth, 10);
  const year: number = parseInt(sYear, 10);
  const currentYear: number = new Date().getFullYear();

  const M1 = fromNumberToArcan(day),
    M2 = fromNumberToArcan(month),
    M3 = fromNumberToArcan(year),
    M4 = fromNumberToArcan(day + month + year),
    M5 = fromNumberToArcan(M1 + M2 + M3 + M4),
    M6 = fromNumberToArcan(M1 + M2),
    M7 = fromNumberToArcan(Math.abs(M2 - M3)),
    M8 = fromNumberToArcan(currentYear + M6),
    M9 = fromNumberToArcan(M6 + M7),
    M10 = fromNumberToArcan(22 - M9),
    M11 = fromNumberToArcan(M3 + M7 + M10),
    M12 = fromNumberToArcan(M2 + M4 + M6),
    verticalAxis = M12 + M1 + M5 + M3 + M11,
    horizontalAxis = M9 + M2 + M5 + M4,
    M13 = fromNumberToArcan(verticalAxis + horizontalAxis),
    M14 = 2 * (day + month + year),
    M15 = fromNumberToArcan(M11 + M9 + M4 + M12 + M5),
    M16 = 0,
    M17 = 0,
    M18 = 0,
    M19 = 0;
  const Mythe = fromNumberToArcan(M6 + M7 + M4);

  const houses = [
    { number: 0, arcan: 22 },
    { number: 1, arcan: M1 },
    { number: 2, arcan: M2 },
    { number: 3, arcan: M3 },
    { number: 4, arcan: M4 },
    { number: 5, arcan: M5 },
    { number: 6, arcan: M6 },
    { number: 7, arcan: M7 },
    { number: 8, arcan: M8 },
    { number: 9, arcan: M9 },
    { number: 10, arcan: M10 },
    { number: 11, arcan: M11 },
    { number: 12, arcan: M12 },
    { number: 13, arcan: M13 },
    { number: 14, arcan: Mythe }
  ];

  return houses;
}

export default function Layout({ date }: { date: string }) {
  const houses: house[] = getBirthSent(date);

  return (
    <div className="layout">
      <div className="line">
        <House arcan={houses[13].arcan} />
        <House />
        <House arcan={houses[12].arcan} />
        <House />
        <House />
      </div>
      <div className="line">
        <House />
        <House arcan={houses[6].arcan} />
        <House arcan={houses[1].arcan} />
        <House arcan={houses[8].arcan} />
        <House />
      </div>
      <div className="line">
        <House arcan={houses[9].arcan} />
        <House arcan={houses[2].arcan} />
        <House arcan={houses[5].arcan} />
        <House arcan={houses[4].arcan} />
        <House />
      </div>
      <div className="line">
        <House />
        <House arcan={houses[7].arcan} />
        <House arcan={houses[3].arcan} />
        <House arcan={houses[10].arcan} />
        <House />
      </div>
      <div className="line">
        <House arcan={houses[14].arcan} />
        <House />
        <House arcan={houses[11].arcan} />
        <House />
        <House />
      </div>
    </div>
  );
}
