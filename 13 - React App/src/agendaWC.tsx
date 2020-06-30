import React, { useRef, useEffect } from 'react';
import '@microsoft/mgt';
import './tailwind.generated.css';

const AgendaWC = () => {
    const agendaRef = useRef<any>(null);

    useEffect(() => {
        agendaRef.current.templateContext = {
            openWebLink: (e: any, context: { event: { webLink: string | undefined; }; }, root: any) => {
                window.open(context.event.webLink, '_blank');
            },
            getDate: (dateString: string) => {
                let dateObject = new Date(dateString);
                return dateObject.setHours(0, 0, 0, 0);
            },
            getTime: (dateString: string) => {
                let dateObject = new Date(dateString);
                return dateObject.getHours().toString().padStart(2, '0')
                    + ':' + dateObject.getMinutes().toString().padStart(2, '0');
            }
        }
    }, []);

    return (
        <mgt-agenda group-by-day ref={agendaRef}>
            <template data-type="event">
                <div className="tracking-tight shadow-md p-4 m-3">
                    <div className="tracking-tight font-semibold cursor-pointer" data-props="{{@click: openWebLink, innerHTML: event.subject}}" />
                    <div className="tracking-tight"
                        data-if="getDate(event.start.dateTime) == getDate(event.end.dateTime)"
                        data-props="{{innerHTML: 'from ' + getTime(event.start.dateTime) + ' to ' + getTime(event.end.dateTime)}}" />
                    <div className="overflow-y-auto mt-3 p-1 bg-gray-200"
                        data-if="event.body.content != ''"
                        data-props="{{innerHTML: event.body.content}}"
                        style={{ maxHeight: "150px" }} />
                </div>
            </template>
            <template data-type="no-data">
                <div className="tracking-tight text-center shadow-md p-4 mx-3">
                    No events to show
              </div>
            </template>
        </mgt-agenda>
    );
}

export default AgendaWC;
