import { text } from "../text";

export default function Steps() {
  const steps = Array(3).fill(text);

  return (
    <section>
      <h1 className="title">Sticky container</h1>
      <div className="steps-container">
        <div>
          <div className="dog">
            <h1>Lorem ipsum</h1>
            <img src="/images/dog.jpg" alt="" />
          </div>
        </div>
        <div className="steps">
          {steps.map((step, index) => {
            return (
              <div className="step" key={index}>
                <p>
                  <b>Step {index + 1}: </b> {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
