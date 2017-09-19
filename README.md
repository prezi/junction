# junction
Prezi material for the Junction workshop (@ Google Grund, 18 September 2017)

We need to load the prezi from prezi.com server using Web workers, and Chrome by default doesn't allow to send cross-domain requests from Web workers.
To enable it, we need to run Chrome with a `--disable-web-security` flag from your terminal:

```
/applications/google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=$HOME/tmp/chrome --disable-web-security
```


If you'd like to control the prezi player through your gestures in the webcam, you also need to use the `--allow-file-access-from-files` flag when starting Chrome. It is needed because we run the app in the browser from a local file, and in this case Chrome doesn't allow camera capture by default.

```
/applications/google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=$HOME/tmp/chrome --disable-web-security --allow-file-access-from-files
```
