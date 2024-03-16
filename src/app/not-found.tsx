import Image from "next/image";
import Link from "next/link";
export default function notFound() {
    return (
        <div>
            <Link href='/'>
                На главную
            </Link>
            <div style={{textAlign: "center"}}>
                <Image src='/new-sayt-404.png' alt="Страницы не существует" width={962} height={403}/>
            </div>
        </div>
    );
}