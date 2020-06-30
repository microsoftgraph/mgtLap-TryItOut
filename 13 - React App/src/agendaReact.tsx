import React from 'react';
import '@microsoft/mgt';
import { Agenda, MgtTemplateProps } from 'mgt-react';
import './tailwind.generated.css';

const AgendaReact = () => {
    return (
        <Agenda groupByDay={true} >
            <Event template="event" />
            <NoData template="no-data" />
        </Agenda>
    );
}

const Event = (props: MgtTemplateProps) => {
    const { event } = props.dataContext;

    const openWebLink = () => {
        window.open(event.webLink, '_blank');
    };

    const getDate = (dateString: string) => {
        let dateObject = new Date(dateString);
        return dateObject.setHours(0, 0, 0, 0);
    };

    const getTime = (dateString: string) => {
        let dateObject = new Date(dateString);
        return dateObject.getHours().toString().padStart(2, '0')
            + ':' + dateObject.getMinutes().toString().padStart(2, '0');
    };

    return (
        <div className="tracking-tight shadow-md p-4 m-3">
            <div className="tracking-tight font-semibold cursor-pointer" onClick={() => { openWebLink(); }}>
                {event.subject}
            </div>

            {(getDate(event.start.dateTime) === getDate(event.end.dateTime)) ?
                <div className="tracking-tight">
                    from {getTime(event.start.dateTime)} to {getTime(event.end.dateTime)}
                </div>
                : null
            }
            {(event.body.content !== '') ?
                <div className="overflow-y-auto mt-3 p-1 bg-gray-200"
                    dangerouslySetInnerHTML={{ __html: event.body.content }}
                    style={{ maxHeight: "150px" }} />
                : null
            }
        </div>
    );
};

const NoData = (props: MgtTemplateProps) => {
    return <div className="tracking-tight text-center shadow-md p-4 mx-3">
        No events to show
      </div>
};

export default AgendaReact;