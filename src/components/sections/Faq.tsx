interface FeaturesProps {
    ref: (node?: Element | null) => void;
}

export default function Faq({ ref }: FeaturesProps) {
    return (
        <section id="faq" ref={ref} className="mb-[100px]">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eveniet at, id delectus amet
                corrupti incidunt sapiente nam porro reiciendis sit voluptatem cum hic voluptates inventore odit fugiat
                atque harum? Obcaecati odio repudiandae fugiat pariatur quaerat accusantium officia sed! Dolores,
                corrupti. Suscipit doloribus voluptate odit. Officiis cupiditate delectus ut officia dicta harum ipsa
                atque odit, quibusdam voluptatibus quia! Amet, fugit. Earum dolorem praesentium voluptates tenetur velit
                reprehenderit culpa fuga provident? Quibusdam ad deleniti aliquam reprehenderit quis ipsam, corporis
                illo obcaecati veritatis repellat. Laborum minus incidunt asperiores ducimus ipsa. Ea, ad? Adipisci,
                eum. Eius deserunt ab veritatis omnis delectus ut laudantium impedit velit nostrum quo illum aspernatur
                sunt deleniti dolores voluptatem, ullam
            </p>
        </section>
    );
}
