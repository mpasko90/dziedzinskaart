const WORDPRESS_GRAPHQL_ENDPOINT = "https://admin.dziedzinskaart.com/graphql";

// Typy
export type ImageNode = {
    id: string
    title: string
    galeriaGrupa: {
        obraz: {
            node: {
                sourceUrl: string
                altText: string
            }
        }
        tytul: string
        opis: string
        kategoria: string[]
        dostepnosc: boolean
    }
}

const GET_ALL_IMAGES_QUERY = `
  query GetAllImages {
    allGaleriaObrazow {
      nodes {
        id
        title
        galeriaGrupa {
          obraz {
            node {
              sourceUrl
              altText
            }
          }
          tytul
          opis
          kategoria
          dostepnosc
        }
      }
    }
  }
`;

async function fetchGraphQL<T>(query: string): Promise<T> {
    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
        }),
    });

    const { data } = await response.json();
    return data;
}

export async function getAllImages() {
    const data = await fetchGraphQL<{ allGaleriaObrazow: { nodes: ImageNode[] } }>(GET_ALL_IMAGES_QUERY);
    return data.allGaleriaObrazow.nodes;
}

export function filterImagesByCategory(images: ImageNode[], category: string) {
    return images.filter(image =>
        image.galeriaGrupa.kategoria.includes(category)
    );
}