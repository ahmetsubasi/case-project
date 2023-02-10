import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>Böyle bir ürün yok.</h2>
            <Link href="/">Anasayfaya gitmek için tıklayın.</Link>
        </div>
    );
}