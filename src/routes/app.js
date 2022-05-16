import {Route, Switch} from "react-router-dom";
import {Origins} from "../page/origins";
import { Mint } from "../page/mint";
import { Page14 } from "../page/page-14";
import { Page13 } from "../page/page-13";
import { Goods } from "../page/goods";
import { Blog } from "../page/blog";
import { OnSale } from "../page/on-sale";
import { DetailSecondary } from "../page/secondary/detailSecondary/detailSecondary";
import { Secondary } from "../page/secondary/secondary";
import { DetailProduct } from "../component/detailProduct";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/origins">
                <Origins/>
            </Route>
            
            {/* <Route path="/on-sale/page-8">
                <Page8/>
            </Route> */}

            <Route path="/on-sale/mint">
                <Mint/>
            </Route>

            {/* <Route path="/on-sale/page-10">
                <Page10/>
            </Route> */}

            {/* <Route path="/secondary/page-5">
                <Page5/>
            </Route>

            <Route path="/secondary/page-6">
                <Page6/>
            </Route> */}

            <Route path="/goods/page-14">
                <Page14/>
            </Route>

            <Route path="/blog/page-13">
                <Page13/>
            </Route>

            <Route path="/on-sale">
                <OnSale/>
            </Route>

            <Route path="/secondary/:address/:token_id/:listing_id">
                <DetailProduct/>
            </Route>

            <Route path="/secondary/:address">
                <DetailSecondary/>
            </Route>

            <Route path="/secondary">
                <Secondary/>
            </Route>

            <Route path="/goods">
                <Goods/>
            </Route>

            <Route path="/blog">
                <Blog/>
            </Route>            
            
        </Switch>
    )
}
