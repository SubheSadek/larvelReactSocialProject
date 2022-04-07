import { Link } from "react-router-dom";

function leftSection(){
    return(
        <>
            <div className="_left_sec _box_shdw2  _mar_b30">
                <h2 className="_blogtitle">Latest News</h2>

                <div className="_blog2_card">

                    <div className="_blog2_card_items">
                        <div className="_blog2_card_pic">
                            <img className="_blog2_card_img" src="/img/man.jpg" alt="" title="" />
                        </div>

                        <div className="_blog2_card_details">
                            <Link to="/blogSingle" className="_blog2_card_name">
                                Liberom nec lacinia egestas vivamus maecenas. Noninte nislqu
                                 teger pharetr loremnul suscip. Amus usce
                            </Link>

                            <div className="_blog2_card_pro">
                                <div className="_blog2_card_pro_pic">
                                    <img className="_blog2_card_pro_img" src="/img/pic.jpg" alt="" title=""/>
                                </div>
                                <p className="_blog2_card_pro_name">Jacqueline J. Hill</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default leftSection;
