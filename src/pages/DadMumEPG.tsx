import { daddyepg, mummyepg } from "../assets"
import { Navbar, SendPrayReq, SubHero } from "./components"


const DadMumEPG = () => {
  return (
    <div>
      <Navbar />
      <SubHero />
      <div className="container">
        {/* Daddy EPG */}
        <div className="py-12">
          <h3 className="text-xl md:text-4xl text-center font-[500] font-[Jost] py-12">
            About Daddy EPG
          </h3>
         <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 md:gap-12">
          <div>
            <img src={daddyepg} className="w-full" alt="" />
          </div>
          <div className="col-span-2">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel repudiandae doloremque quibusdam soluta sequi enim eum placeat ipsam illum! Magni nostrum, pariatur fuga sit illum vel harum sunt nulla aliquid perspiciatis facilis porro, architecto nesciunt voluptatibus consequatur fugiat ab maxime expedita autem tenetur ipsam quaerat nemo cumque. Odio eius magni, nihil quasi voluptas porro vel? Voluptas minus cum vitae illum voluptate doloremque fuga quisquam excepturi, officiis fugit commodi alias animi sint impedit qui perferendis laudantium. Blanditiis, minima! Nihil, assumenda nobis. A sint vitae, itaque quisquam facilis, quo libero officiis corporis facere architecto ratione debitis delectus eum eveniet necessitatibus odio obcaecati. Doloremque ullam commodi obcaecati velit numquam similique unde in consequuntur non, at incidunt nostrum quod eveniet laboriosam ducimus quo blanditiis totam eos nam dicta? Quaerat velit doloribus ratione ex consequuntur, impedit sint quisquam ducimus nemo aut quasi amet consequatur nihil, iste quos vero ab. Accusantium voluptas blanditiis, sed commodi cumque eos dignissimos quae omnis assumenda, unde nesciunt maiores reiciendis cum iure nulla modi laborum tempora ad debitis aut! Aliquam animi perferendis eius sunt ex officiis quasi non quaerat id? Consectetur impedit voluptatibus repudiandae iste sint sequi unde accusamus officia, sed placeat facere atque deleniti quae veniam asperiores fuga a.</p>
          </div>
        </div> 
        </div>
        <div className="py-12">
          <h3 className="text-xl md:text-4xl text-center font-[500] font-[Jost] py-12">
            About Mummy EPG
          </h3>
         <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 md:gap-12">
          <div className="col-span-2">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel repudiandae doloremque quibusdam soluta sequi enim eum placeat ipsam illum! Magni nostrum, pariatur fuga sit illum vel harum sunt nulla aliquid perspiciatis facilis porro, architecto nesciunt voluptatibus consequatur fugiat ab maxime expedita autem tenetur ipsam quaerat nemo cumque. Odio eius magni, nihil quasi voluptas porro vel? Voluptas minus cum vitae illum voluptate doloremque fuga quisquam excepturi, officiis fugit commodi alias animi sint impedit qui perferendis laudantium. Blanditiis, minima! Nihil, assumenda nobis. A sint vitae, itaque quisquam facilis, quo libero officiis corporis facere architecto ratione debitis delectus eum eveniet necessitatibus odio obcaecati. Doloremque ullam commodi obcaecati velit numquam similique unde in consequuntur non, at incidunt nostrum quod eveniet laboriosam ducimus quo blanditiis totam eos nam dicta? Quaerat velit doloribus ratione ex consequuntur, impedit sint quisquam ducimus nemo aut quasi amet consequatur nihil, iste quos vero ab. Accusantium voluptas blanditiis, sed commodi cumque eos dignissimos quae omnis assumenda, unde nesciunt maiores reiciendis cum iure nulla modi laborum tempora ad debitis aut! Aliquam animi perferendis eius sunt ex officiis quasi non quaerat id? Consectetur impedit voluptatibus repudiandae iste sint sequi unde accusamus officia, sed placeat facere atque deleniti quae veniam asperiores fuga a.</p>
          </div>
          <div>
            <img src={mummyepg} className="w-full" alt="" />
          </div>
        </div> 
        </div>
      </div>
      <SendPrayReq />
    </div>
  )
}

export default DadMumEPG