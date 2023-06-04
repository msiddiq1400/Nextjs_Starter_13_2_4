import Link from "next/link"
import Image from "next/image"

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    const itemTextCol = (
        <div>
            <h2>
                <Link
                    className="text-xl font-bold underline"
                    href={`https://en.wikipedia.org/curid=${result.pageid}`}
                >
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <article className="m-4 max-w-lg">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col justify-center">
                        <Image
                            src={result.thumbnail?.source}
                            width={result.thumbnail.width}
                            height={result.thumbnail.height}
                            alt={result.title}
                            loading="lazy"
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>

        )
        : (
            <article className="m-4 max-w-lg">
                {itemTextCol}
            </article>
        )
    
    return content
}