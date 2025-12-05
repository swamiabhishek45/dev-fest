import EventCard from "@/components/EventCard";
import ExpBtn from "@/components/ExpBtn";
import { events } from "@/lib/constants";


export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-center">The Hub for every Dev <br /> Events you can't miss</h1>
        <p className="text-center mt-5">Hackthons, Meetups, and Conferences. All in one</p>

        <ExpBtn />

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ul className="events list-none">
            {
              events.map((event) => (
                <li key={event.title} >

                  <EventCard {...event} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
