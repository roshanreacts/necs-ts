import { http, HttpResponse } from 'msw';
import App from './DyCom';

export default {
  title: 'Container/DyCom',
  component: App,
};
export const DyComButton = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.example.com/component-url', () => {
          return HttpResponse.text(`
                      import _ from "lodash";
                      // ---Component---
          function Button({onClick}) {
                        return (
                          <button
                            style={{
                              color: "red",
                              fontSize: "20px",
                              backgroundColor: "blue",
                              padding: "10px",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            onClick={onClick}
                          >
                            {_.startCase("Click me")}
                          </button>
                        );
                      }`);
        }),
      ],
    },
  },
  args: {
    onClick: () => console.log("clicked")
  }
};