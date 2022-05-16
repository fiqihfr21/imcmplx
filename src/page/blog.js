import {Galleria} from "../component/galleria";
import dummyImage from "../assets/dummy-image-2.png"
import dummyImage1 from "../assets/dummy-image.png"
import dummyImage2 from "../assets/dummy-image-3.png"
import dummyImage3 from "../assets/dummy-image-4.png"

// page 12
export const Blog = () => {
    const cardList = [
        {
            image: dummyImage,
            title: "SITTIN' ON YOUR COUCH WHILE WORLD COLLAPSES",
            category: ['Entrophy', 'Game', 'Replicant'],
            author: "by Roy Batty, 06/08/2018",
            url: '/blog/page-13'
        },
        {
            title: "SITTIN' ON YOUR COUCH WHILE WORLD COLLAPSES",
            url: '/blog/page-13'
        },
        {
            image: dummyImage1,
            title: "A DELUSIONAL MISFIT",
            category: ['Entrophy', 'Game', 'Replicant'],
            author: "by Roy Batty, 06/08/2018",
            url: '/blog/page-13'
        },
        {
            image: dummyImage2,
            title: "A DELUSIONAL MISFIT",
            category: ['Entrophy', 'Game', 'Replicant'],
            author: "by Roy Batty, 06/08/2018",
            url: '/blog/page-13'
        },
        {
            image: dummyImage3,
            title: "A DELUSIONAL MISFIT",
            category: ['Entrophy', 'Game', 'Replicant'],
            author: "by Roy Batty, 06/08/2018",
            url: '/blog/page-13'
        },
        {
            title: "WOULD'NT OBSTRUCT REPLICATION, BUT IT DOES GIVE RISE TO AN ERROR IN REPLICATION, SO THAT THE NEWLI FORMED DNA STRAND CARRIES WITH IT A MUTATION.",
            url: '/blog/page-13'
        },
        {
            image: dummyImage2,
            title: "A DELUSIONAL MISFIT",
            category: ['Entrophy', 'Game', 'Replicant'],
            author: "by Roy Batty, 06/08/2018",
            url: '/blog/page-13'
        },
        {
            image: dummyImage1,
            title: "A DELUSIONAL MISFIT",
            category: ['Entrophy', 'Game', 'Replicant'],
            author: "by Roy Batty, 06/08/2018",
            url: '/blog/page-13'
        },
    ]

    return (
        <div className={"flex flex-col justify-center container mx-auto"}>
            <div className={"pt-20 pb-60 px-40"}>
                <Galleria title={null} columns={3} cards={cardList}/>
            </div>
        </div>
    )
}
