var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'},
    dataType: 'json',
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.log(err);
    },
    type: 'GET'
  })


};

window.searchYouTube = searchYouTube;


 // $.ajax({
 //   cache: false,
 //   data: $.extend({
 //     key: 'API_KEY',
 //     q: $('#hyv-search').val(),
 //     part: 'snippet'
 //   }, {maxResults:20,pageToken:$("#pageToken").val()}),
 //   dataType: 'json',
 //   type: 'GET',
 //   timeout: 5000,
 //   url: 'https://www.googleapis.com/youtube/v3/search'
 // })

  // search: function(query) {
  //   this.fetch({
  //     data: {
  //       q: query,
  //       part: 'snippet',
  //       maxResults: 5,
  //       type: 'video',
  //       key: window.YOUTUBE_API_KEY,
  //       videoEmbeddable: 'true'
  //     }
  //   });
  // },

  // var request = gapi.client.youtube.search.list({
  //   q: q,
  //   part: 'snippet'
  // });

  // request.execute(function(response) {
  //   var str = JSON.stringify(response.result);
  //   $('#search-container').html('<pre>' + str + '</pre>');
  // });