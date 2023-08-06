const NFTCard = () => {
  return (
    <>
      <div className="nft-card-wrapper">
        <div className={"nft-card rounded-4 dark-bg"}>
          <img
            src="assets/images/nft_card_img.svg"
            alt=""
            className="w-100 main-card-img"
          />
          <div className="nft-card-body-wrapper  position-relative p-3">
            <img
              src="assets/images/nft_profile_icon.svg"
              alt=""
              className="nft-card-icon position-absolute start-0 end-0 mx-auto"
            />
            <div className="nft-card-body d-flex align-items-center justify-content-between">
              <div className="nft-card-l flex-grow-1">
                <p className="primary-color">TUD NFT</p>
              </div>

              <div className="nft-card-r flex-grow-1">
                <div className="d-flex align-item-center justify-content-end">
                  <img
                    src="assets/images/bitcoin_icon.svg"
                    alt=""
                    className=""
                  />
                  <p className="primary-color ms-2">260</p>
                </div>
              </div>
            </div>
            <div className="nft-card-button">
            <button className="button rounded-0 text-center py-1 mt-3">
             View
            </button>

            </div>
            {/* {
              button  == "card" ? 
              <button className="primary-bg rounded-3 light-color mb-2 mt-3 m-auto fs-4 w-100 ">
              Add to cart
            </button>
            :
            <button className="primary-bg rounded-3 light-color mb-2 mt-3 m-auto fs-4 w-100 ">
              Collect
            </button>
            } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
