        function sendAjax() {
              //构造表单数据
              var formData = new FormData();
              formData.append('username', 'twx');
              formData.append('id', 1);
              //创建xhr对象 
              var xhr = new XMLHttpRequest();
              //设置xhr请求的超时时间
              xhr.timeout = 3000;
              //设置响应返回的数据格式
              xhr.responseType = "text";
              //创建一个 post 请求，采用异步
              xhr.open('POST', '', true);
              //注册相关事件回调处理函数
      
              xhr.onload = function(e) { 
                if(this.status == 200||this.status == 304){
                    // alert(this.responseText);
                }
              };
              // xhr.ontimeout = function(e) { ... };
              // xhr.onerror = function(e) { ... };
               // xhr.upload.onprogress = function(e) { 
               //    if (e.lengthComputable) {
               //      var completedPercent = e.loaded / e.total;  //e.loaded为已经传输的字节，e.total为传输总字节
               //      console.log(e.loaded);
               //      console.log(e.total);
               //      console.log(completedPercent);
               //      // 根据XMLhttpRequest 动态改变进度条进度
               //      percent = completedPercent*100
               //      var $progress =  $(".bs-example").find('div[role="progressbar"]');
               //      $progress.attr('data-transitiongoal-backup',percent);
               //      $('#h-fill-animated .progress-bar').each(function () {
               //          var $pb = $(this);
               //          $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
               //          $pb.progressbar({display_text: 'fill'});
               //      });
               //    }

               // }; //上传进度信息
               xhr.onprogress = function(e) {  //下载进度信息
                if (e.lengthComputable) {
                  var completedPercent = e.loaded / e.total;  //e.loaded为已经传输的字节，e.total为传输总字节
                  console.log(e.loaded);
                  console.log(e.total);
                  console.log(completedPercent);
                  // 根据XMLhttpRequest 动态改变进度条进度
                  percent = completedPercent*100
                  var $progress =  $(".bs-example").find('div[role="progressbar"]');
                  $progress.attr('data-transitiongoal-backup',percent);
                  $('#h-fill-animated .progress-bar').each(function () {
                      var $pb = $(this);
                      $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                      $pb.progressbar({display_text: 'fill'});
                  });
                }
                console.log( $progress.attr('data-transitiongoal-backup'));
            };
              //发送数据
              xhr.send(formData);
        }
      sendAjax();