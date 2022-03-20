import HTTP from "../../src/classes/httpTransport";

describe("Тестирование api клиента", () => {
  const apiInstance = new HTTP(
    "/posts",
    "https://jsonplaceholder.typicode.com"
  );

  it("Get", (done) => {
    apiInstance
      .get<{ id: number }>("/1")
      .then((data) => {
        const { id } = data || {};
        if (id === 1) {
          done();
        } else {
          done(new Error("Ожидался объект с ключом id и значением 1"));
        }
      })
      .catch(done);
  });

  it("Post", (done) => {
    apiInstance
      .post<{ title: string }>("/", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        data: JSON.stringify({
          title: "test",
          body: "bar",
          userId: 1,
        }),
      })
      .then((data) => {
        const { title } = data || {};
        if (title === "test") {
          done();
        } else {
          done(new Error("Ожидался объект с ключом title и значением 'test'"));
        }
      })
      .catch(done);
  });
});
