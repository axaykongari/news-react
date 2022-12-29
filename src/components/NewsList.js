import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import Toast from "./Toast";

export class NewsList extends Component {
  apiKey = "a8ec54a283c1428cb7fdbf2221d844eb"; //msp
  //apiKey = '388c3f642c454b5b9d28bfe902df706a';//pers
  article = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "AFP",
      title:
        "Dismal Proteas punished as Warner retires in pain after making 200",
      description:
        "Opener David Warner battled through searing heat to hit an epic unbeaten 200 in his 100th Test on Tuesday before retiring in pain as Australia consolidated their advantage against South Africa at the Melbourne Cricket Ground.",
      url: "https://www.news24.com/sport/cricket/proteas/dismal-proteas-punished-as-warner-retires-in-pain-after-making-200-20221227",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/749/9ff0aa9b1334496385bd944057397fa9.jpg",
      publishedAt: "2022-12-27T09:35:13+00:00",
      content:
        "Opener David Warner battled through searing heat to hit an epic unbeaten 200 in his 100th Test on Tuesday before retiring in pain as Australia consolidated their advantage against South Africa at the… [+3012 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Christmas in Australia - Luff enjoying benefits of professionalism",
      description:
        "Western Storm captain Sophie Luff tells BBC Sport about her winter in Australia playing club cricket.",
      url: "http://www.bbc.co.uk/sport/cricket/63854207",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E327/production/_127915185_gettyimages-1399887507.jpg",
      publishedAt: "2022-12-27T08:22:23.7593454Z",
      content:
        "Sophie Luff represented London Spirit during The Hundred in 2022\r\n\"It's hot and there's Christmas trees and all these decorations going up, it feels a bit weird.\"\r\nWest country stalwart Sophie Luff i… [+4543 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      article: this.article,
      page: 1,
      showToast: false,
      toast: {
        title: "Error",
        message: "No Data Found",
      },
      category: "",
      loading: false,
    };
  }

  handlePrevious = () => {
    console.log(this.state.category, "category");
    if (this.state.page > 1) {
      this.getList(this.state.page - 1);
    }
  };

  handleNext = () => {
    console.log(this.state.category, "category");
    this.getList(this.state.page + 1, this.state.category);
  };

  componentDidMount() {
    this.getList(this.state.page);
  }

  selectedCategory = (category) => {
    console.log(category, "category");
    this.setState({
      category: category,
    });
    this.getList(1, category);
  };

  getList = async (page, category = "") => {
    this.setState({ loading: true });
    let url = "";
    if (category === "") {
      url =
        "https://newsapi.org/v2/top-headlines?language=en&pageSize=21&apiKey=" +
        this.apiKey +
        "&page=" +
        page;
    } else {
      url =
        "https://newsapi.org/v2/top-headlines?language=en&pageSize=21&category=" +
        category +
        "&apiKey=" +
        this.apiKey +
        "&page=" +
        page;
    }
    let data = await fetch(url);
    let jsonData = await data.json();

    if (jsonData.status === "ok") {
      if (jsonData.articles.length > 0) {
        this.setState({
          article: jsonData.articles,
          page: page,
        });
      } else {
        this.setState({
          showToast: true,
          toast: {
            title: "error",
            message: "No news found",
          },
        });

        setInterval(() => {
          this.setState({
            showToast: false,
          });
        }, 4000);
      }
    } else {
      this.setState({
        showToast: true,
        toast: {
          title: jsonData.code,
          message: jsonData.message,
        },
      });

      setInterval(() => {
        this.setState({
          showToast: false,
        });
      }, 4000);
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-2 my-1">
            <CategoryList
              category={this.state.category}
              selectedCategory={this.selectedCategory}
            />
          </div>
          <div className="col-md-10">
            {this.state.loading ? (
              <Loader />
            ) : (
              <>
                <div className="container">
                  <div className="row">
                    {this.state.article.map((element) => {
                      let { title, description, urlToImage, url } = element;
                      return (
                        <NewsItem
                          key={url}
                          title={title}
                          description={description}
                          image={urlToImage}
                          url={url}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="container d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={this.handlePrevious}
                  >
                    &laquo;Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={this.handleNext}
                  >
                    Next&raquo;
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {this.state.showToast && (
          <Toast
            title={this.state.toast.title}
            message={this.state.toast.message}
          />
        )}
      </>
    );
  }
}

export default NewsList;
