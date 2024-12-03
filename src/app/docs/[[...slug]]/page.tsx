export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log(params.slug);
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>
          Viewing Docs for feature {params.slug[0]} and concept{" "}
          {params.slug[1]}
        </h1>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <h1>Viewing Docs for feature {params.slug[0]}</h1>
      </div>
    );
  }
    return (
      <div>
        <h1>Docs Home Page Funtion</h1>
      </div>
    );

}
