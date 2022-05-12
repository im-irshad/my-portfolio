import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <a
        href={
          "https://api.facebook.com/sharer/sharer.php?u=http://localhost:3000/se/sv/happyinvite?utm_source=referral&utm_medium=happyinvite&invitationCode=fowlat-vy44z978"
        }
        data-action="share/facebook/share"
      >
        invite fb
      </a>
      <a
        href={
          "fb-messenger://share/?link=http://localhost:3000/se/sv/happyinvite?utm_source=referral&utm_medium=happyinvite&invitationCode=fowlat-vy44z978"
        }
      >
        invite fb mess
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A3000/se/sv/happyinvite?utm_source=referral%26utm_medium=happyinvite%26invitationCode=fowlat-vy44z978">
        Share on Facebook
      </a>
      <h5 className="my-3 font-medium text-bblue">
        I am a passionate IT-professional with an experience of working with
        Javascript, Typescript, React, Express, Node and MongoDB. Eager to learn
        more, active and always ready to accept the new challenges.
      </h5>
      <div className="p-4 my-5 bg-gray-300 flex-grow">
        <h6 className="my-3 text_xl font-bold text-dblue">What I Offer</h6>

        <div className="grid gap-6  ">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
