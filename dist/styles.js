(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\ntable.dataTable {\n  clear: both;\n  margin-top: 6px !important;\n  margin-bottom: 6px !important;\n  max-width: none !important;\n  border-collapse: separate !important;\n  border-spacing: 0;\n}\ntable.dataTable td, table.dataTable th {\n  box-sizing: content-box;\n}\ntable.dataTable td.dataTables_empty, table.dataTable th.dataTables_empty {\n  text-align: center;\n}\ntable.dataTable.nowrap th, table.dataTable.nowrap td {\n  white-space: nowrap;\n}\ndiv.dataTables_wrapper div.dataTables_length label {\n  font-weight: normal;\n  text-align: left;\n  white-space: nowrap;\n}\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: auto;\n  display: inline-block;\n}\ndiv.dataTables_wrapper div.dataTables_filter {\n  text-align: right;\n}\ndiv.dataTables_wrapper div.dataTables_filter label {\n  font-weight: normal;\n  white-space: nowrap;\n  text-align: left;\n}\ndiv.dataTables_wrapper div.dataTables_filter input {\n  margin-left: 0.5em;\n  display: inline-block;\n  width: auto;\n}\ndiv.dataTables_wrapper div.dataTables_info {\n  padding-top: 0.85em;\n  white-space: nowrap;\n}\ndiv.dataTables_wrapper div.dataTables_paginate {\n  margin: 0;\n  white-space: nowrap;\n  text-align: right;\n}\ndiv.dataTables_wrapper div.dataTables_paginate ul.pagination {\n  margin: 2px 0;\n  white-space: nowrap;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\ndiv.dataTables_wrapper div.dataTables_processing {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  margin-left: -100px;\n  margin-top: -26px;\n  text-align: center;\n  padding: 1em 0;\n}\ntable.dataTable thead > tr > th.sorting_asc, table.dataTable thead > tr > th.sorting_desc, table.dataTable thead > tr > th.sorting {\n  padding-right: 30px;\n}\ntable.dataTable thead > tr > td.sorting_asc, table.dataTable thead > tr > td.sorting_desc, table.dataTable thead > tr > td.sorting {\n  padding-right: 30px;\n}\ntable.dataTable thead > tr > th:active, table.dataTable thead > tr > td:active {\n  outline: none;\n}\ntable.dataTable thead .sorting, table.dataTable thead .sorting_asc, table.dataTable thead .sorting_desc, table.dataTable thead .sorting_asc_disabled, table.dataTable thead .sorting_desc_disabled {\n  cursor: pointer;\n  position: relative;\n}\ntable.dataTable thead .sorting:before, table.dataTable thead .sorting:after {\n  position: absolute;\n  bottom: 0.9em;\n  display: block;\n  opacity: 0.3;\n}\ntable.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_asc:after {\n  position: absolute;\n  bottom: 0.9em;\n  display: block;\n  opacity: 0.3;\n}\ntable.dataTable thead .sorting_desc:before, table.dataTable thead .sorting_desc:after {\n  position: absolute;\n  bottom: 0.9em;\n  display: block;\n  opacity: 0.3;\n}\ntable.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_asc_disabled:after {\n  position: absolute;\n  bottom: 0.9em;\n  display: block;\n  opacity: 0.3;\n}\ntable.dataTable thead .sorting_desc_disabled:before, table.dataTable thead .sorting_desc_disabled:after {\n  position: absolute;\n  bottom: 0.9em;\n  display: block;\n  opacity: 0.3;\n}\ntable.dataTable thead .sorting:before, table.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_desc:before, table.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_desc_disabled:before {\n  right: 1em;\n  content: \"↑\";\n}\ntable.dataTable thead .sorting:after, table.dataTable thead .sorting_asc:after, table.dataTable thead .sorting_desc:after, table.dataTable thead .sorting_asc_disabled:after, table.dataTable thead .sorting_desc_disabled:after {\n  right: 0.5em;\n  content: \"↓\";\n}\ntable.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_desc:after {\n  opacity: 1;\n}\ntable.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_desc_disabled:after {\n  opacity: 0;\n}\ndiv.dataTables_scrollHead table.dataTable {\n  margin-bottom: 0 !important;\n}\ndiv.dataTables_scrollBody table {\n  border-top: none;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\ndiv.dataTables_scrollBody table thead .sorting:before, div.dataTables_scrollBody table thead .sorting_asc:before, div.dataTables_scrollBody table thead .sorting_desc:before, div.dataTables_scrollBody table thead .sorting:after, div.dataTables_scrollBody table thead .sorting_asc:after, div.dataTables_scrollBody table thead .sorting_desc:after {\n  display: none;\n}\ndiv.dataTables_scrollBody table tbody tr:first-child th, div.dataTables_scrollBody table tbody tr:first-child td {\n  border-top: none;\n}\ndiv.dataTables_scrollFoot > .dataTables_scrollFootInner {\n  box-sizing: content-box;\n}\ndiv.dataTables_scrollFoot > .dataTables_scrollFootInner > table {\n  margin-top: 0 !important;\n  border-top: none;\n}\n@media screen and (max-width: 767px) {\n  div.dataTables_wrapper div.dataTables_length, div.dataTables_wrapper div.dataTables_filter, div.dataTables_wrapper div.dataTables_info, div.dataTables_wrapper div.dataTables_paginate {\n    text-align: center;\n  }\n}\ntable.dataTable.table-sm > thead > tr > th {\n  padding-right: 20px;\n}\ntable.dataTable.table-sm .sorting:before, table.dataTable.table-sm .sorting_asc:before, table.dataTable.table-sm .sorting_desc:before {\n  top: 5px;\n  right: 0.85em;\n}\ntable.dataTable.table-sm .sorting:after, table.dataTable.table-sm .sorting_asc:after, table.dataTable.table-sm .sorting_desc:after {\n  top: 5px;\n}\ntable.table-bordered.dataTable th, table.table-bordered.dataTable td {\n  border-left-width: 0;\n}\ntable.table-bordered.dataTable th:last-child, table.table-bordered.dataTable td:last-child {\n  border-right-width: 0;\n}\ntable.table-bordered.dataTable tbody th, table.table-bordered.dataTable tbody td {\n  border-bottom-width: 0;\n}\ndiv.dataTables_scrollHead table.table-bordered {\n  border-bottom-width: 0;\n}\ndiv.table-responsive > div.dataTables_wrapper > div.row {\n  margin: 0;\n}\ndiv.table-responsive > div.dataTables_wrapper > div.row > div[class^=col-]:first-child {\n  padding-left: 0;\n}\ndiv.table-responsive > div.dataTables_wrapper > div.row > div[class^=col-]:last-child {\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9kYXRhdGFibGVzLm5ldC1iczQvc2Nzcy9kYXRhVGFibGVzLmJvb3RzdHJhcDQuc2NzcyIsIm5vZGVfbW9kdWxlcy9kYXRhdGFibGVzLm5ldC1iczQvc2Nzcy9DOlxcVXNlcnNcXFRhbWFzXFxEZXNrdG9wXFxOdW92YSBjYXJ0ZWxsYVxcc21hcnRpS2V0dGUvbm9kZV9tb2R1bGVzXFxkYXRhdGFibGVzLm5ldC1iczRcXHNjc3NcXGRhdGFUYWJsZXMuYm9vdHN0cmFwNC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FERUo7QUNBSTtFQUVFLHVCQUFBO0FERU47QUNDSTtFQUNFLGtCQUFBO0FEQ047QUNHTTtFQUNFLG1CQUFBO0FERFI7QUNRTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRExSO0FDUU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUROUjtBQ1VJO0VBQ0UsaUJBQUE7QURSTjtBQ1VNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEUlI7QUNXTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FEVFI7QUNhSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QURYTjtBQ2NJO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURaTjtBQ2NNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBRFpSO0FDZ0JJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZE47QUNxQlE7RUFDRSxtQkFBQTtBRGxCVjtBQ3VCUTtFQUNFLG1CQUFBO0FEckJWO0FDeUJNO0VBQ0UsYUFBQTtBRHZCUjtBQzJCSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRHpCTjtBQzZCTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEM0JSO0FDZ0NNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUQ5QlI7QUNtQ007RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRGpDUjtBQ3NDTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEcENSO0FDeUNNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUR2Q1I7QUMyQ0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRHpDTjtBQzRDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FEMUNOO0FDNkNJO0VBQ0UsVUFBQTtBRDNDTjtBQzhDSTtFQUNFLFVBQUE7QUQ1Q047QUNpREk7RUFDRSwyQkFBQTtBRDlDTjtBQ2lESTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBRC9DTjtBQ2tEUTtFQUNFLGFBQUE7QURoRFY7QUNxRFE7RUFDRSxnQkFBQTtBRG5EVjtBQ3dESTtFQUNFLHVCQUFBO0FEdEROO0FDd0RNO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBRHREUjtBQzJERTtFQUVJO0lBQ0Usa0JBQUE7RUR6RE47QUFDRjtBQytETTtFQUNFLG1CQUFBO0FEN0RSO0FDZ0VNO0VBQ0UsUUFBQTtFQUNBLGFBQUE7QUQ5RFI7QUNpRU07RUFDRSxRQUFBO0FEL0RSO0FDb0VNO0VBQ0Usb0JBQUE7QURsRVI7QUNxRU07RUFDRSxxQkFBQTtBRG5FUjtBQ3VFUTtFQUNFLHNCQUFBO0FEckVWO0FDNEVJO0VBQ0Usc0JBQUE7QUR6RU47QUM0RUk7RUFDRSxTQUFBO0FEMUVOO0FDNkVRO0VBQ0UsZUFBQTtBRDNFVjtBQzhFUTtFQUNFLGdCQUFBO0FENUVWIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9kYXRhdGFibGVzLm5ldC1iczQvc2Nzcy9kYXRhVGFibGVzLmJvb3RzdHJhcDQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnRhYmxlLmRhdGFUYWJsZSB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxudGFibGUuZGF0YVRhYmxlIHRkLCB0YWJsZS5kYXRhVGFibGUgdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbnRhYmxlLmRhdGFUYWJsZSB0ZC5kYXRhVGFibGVzX2VtcHR5LCB0YWJsZS5kYXRhVGFibGUgdGguZGF0YVRhYmxlc19lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlLmRhdGFUYWJsZS5ub3dyYXAgdGgsIHRhYmxlLmRhdGFUYWJsZS5ub3dyYXAgdGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19maWx0ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZvIHtcbiAgcGFkZGluZy10b3A6IDAuODVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfcGFnaW5hdGUge1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19wYWdpbmF0ZSB1bC5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAycHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfcHJvY2Vzc2luZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICBtYXJnaW4tdG9wOiAtMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxZW0gMDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoZWFkID4gdHIgPiB0aC5zb3J0aW5nX2FzYywgdGFibGUuZGF0YVRhYmxlIHRoZWFkID4gdHIgPiB0aC5zb3J0aW5nX2Rlc2MsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCA+IHRyID4gdGguc29ydGluZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRkLnNvcnRpbmdfYXNjLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRkLnNvcnRpbmdfZGVzYywgdGFibGUuZGF0YVRhYmxlIHRoZWFkID4gdHIgPiB0ZC5zb3J0aW5nIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCA+IHRyID4gdGg6YWN0aXZlLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRkOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmcsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2MsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuOWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC4zO1xufVxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC45ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjM7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuOWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC4zO1xufVxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC45ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjM7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuOWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC4zO1xufVxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmJlZm9yZSB7XG4gIHJpZ2h0OiAxZW07XG4gIGNvbnRlbnQ6IFwi4oaRXCI7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmc6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmFmdGVyLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDphZnRlciB7XG4gIHJpZ2h0OiAwLjVlbTtcbiAgY29udGVudDogXCLihpNcIjtcbn1cbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YmVmb3JlLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYuZGF0YVRhYmxlc19zY3JvbGxIZWFkIHRhYmxlLmRhdGFUYWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbmRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUge1xuICBib3JkZXItdG9wOiBub25lO1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbmRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmc6YmVmb3JlLCBkaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5IHRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzpiZWZvcmUsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmc6YWZ0ZXIsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmFmdGVyLCBkaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5IHRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0aCwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5kaXYuZGF0YVRhYmxlc19zY3JvbGxGb290ID4gLmRhdGFUYWJsZXNfc2Nyb2xsRm9vdElubmVyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5kaXYuZGF0YVRhYmxlc19zY3JvbGxGb290ID4gLmRhdGFUYWJsZXNfc2Nyb2xsRm9vdElubmVyID4gdGFibGUge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfbGVuZ3RoLCBkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlciwgZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZvLCBkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX3BhZ2luYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbnRhYmxlLmRhdGFUYWJsZS50YWJsZS1zbSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG50YWJsZS5kYXRhVGFibGUudGFibGUtc20gLnNvcnRpbmc6YmVmb3JlLCB0YWJsZS5kYXRhVGFibGUudGFibGUtc20gLnNvcnRpbmdfYXNjOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlLnRhYmxlLXNtIC5zb3J0aW5nX2Rlc2M6YmVmb3JlIHtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAwLjg1ZW07XG59XG50YWJsZS5kYXRhVGFibGUudGFibGUtc20gLnNvcnRpbmc6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZS50YWJsZS1zbSAuc29ydGluZ19hc2M6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZS50YWJsZS1zbSAuc29ydGluZ19kZXNjOmFmdGVyIHtcbiAgdG9wOiA1cHg7XG59XG50YWJsZS50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUgdGgsIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0ZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxudGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRoOmxhc3QtY2hpbGQsIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xufVxudGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRib2R5IHRoLCB0YWJsZS50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUgdGJvZHkgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG5kaXYuZGF0YVRhYmxlc19zY3JvbGxIZWFkIHRhYmxlLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbmRpdi50YWJsZS1yZXNwb25zaXZlID4gZGl2LmRhdGFUYWJsZXNfd3JhcHBlciA+IGRpdi5yb3cge1xuICBtYXJnaW46IDA7XG59XG5kaXYudGFibGUtcmVzcG9uc2l2ZSA+IGRpdi5kYXRhVGFibGVzX3dyYXBwZXIgPiBkaXYucm93ID4gZGl2W2NsYXNzXj1jb2wtXTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbmRpdi50YWJsZS1yZXNwb25zaXZlID4gZGl2LmRhdGFUYWJsZXNfd3JhcHBlciA+IGRpdi5yb3cgPiBkaXZbY2xhc3NePWNvbC1dOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufSIsInRhYmxlLmRhdGFUYWJsZSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIFxyXG4gICAgdGQsIHRoIHtcclxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0ZC5kYXRhVGFibGVzX2VtcHR5LCB0aC5kYXRhVGFibGVzX2VtcHR5IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5ub3dyYXAge1xyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYge1xyXG4gICAgJi5kYXRhVGFibGVzX2xlbmd0aCB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5kYXRhVGFibGVzX2ZpbHRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIFxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICYuZGF0YVRhYmxlc19pbmZvIHtcclxuICAgICAgcGFkZGluZy10b3A6IDAuODVlbTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICBcclxuICAgICYuZGF0YVRhYmxlc19wYWdpbmF0ZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgXHJcbiAgICAgIHVsLnBhZ2luYXRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmRhdGFUYWJsZXNfcHJvY2Vzc2luZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdGFibGUuZGF0YVRhYmxlIHRoZWFkIHtcclxuICAgID4gdHIgPiB7XHJcbiAgICAgIHRoIHtcclxuICAgICAgICAmLnNvcnRpbmdfYXNjLCAmLnNvcnRpbmdfZGVzYywgJi5zb3J0aW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRkIHtcclxuICAgICAgICAmLnNvcnRpbmdfYXNjLCAmLnNvcnRpbmdfZGVzYywgJi5zb3J0aW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoOmFjdGl2ZSwgdGQ6YWN0aXZlIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc29ydGluZywgLnNvcnRpbmdfYXNjLCAuc29ydGluZ19kZXNjLCAuc29ydGluZ19hc2NfZGlzYWJsZWQsIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICBcclxuICAgIC5zb3J0aW5nIHtcclxuICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDAuOWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNvcnRpbmdfYXNjIHtcclxuICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDAuOWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNvcnRpbmdfZGVzYyB7XHJcbiAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwLjllbTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zb3J0aW5nX2FzY19kaXNhYmxlZCB7XHJcbiAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwLjllbTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQge1xyXG4gICAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMC45ZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc29ydGluZzpiZWZvcmUsIC5zb3J0aW5nX2FzYzpiZWZvcmUsIC5zb3J0aW5nX2Rlc2M6YmVmb3JlLCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YmVmb3JlLCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmJlZm9yZSB7XHJcbiAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFwyMTkxXCI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc29ydGluZzphZnRlciwgLnNvcnRpbmdfYXNjOmFmdGVyLCAuc29ydGluZ19kZXNjOmFmdGVyLCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YWZ0ZXIsIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIge1xyXG4gICAgICByaWdodDogMC41ZW07XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFwyMTkzXCI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc29ydGluZ19hc2M6YmVmb3JlLCAuc29ydGluZ19kZXNjOmFmdGVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICBcclxuICAgIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBkaXYge1xyXG4gICAgJi5kYXRhVGFibGVzX3Njcm9sbEhlYWQgdGFibGUuZGF0YVRhYmxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUge1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICBcclxuICAgICAgdGhlYWQge1xyXG4gICAgICAgIC5zb3J0aW5nOmJlZm9yZSwgLnNvcnRpbmdfYXNjOmJlZm9yZSwgLnNvcnRpbmdfZGVzYzpiZWZvcmUsIC5zb3J0aW5nOmFmdGVyLCAuc29ydGluZ19hc2M6YWZ0ZXIsIC5zb3J0aW5nX2Rlc2M6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGJvZHkgdHI6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5kYXRhVGFibGVzX3Njcm9sbEZvb3QgPiAuZGF0YVRhYmxlc19zY3JvbGxGb290SW5uZXIge1xyXG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBcclxuICAgICAgPiB0YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2IHtcclxuICAgICAgJi5kYXRhVGFibGVzX2xlbmd0aCwgJi5kYXRhVGFibGVzX2ZpbHRlciwgJi5kYXRhVGFibGVzX2luZm8sICYuZGF0YVRhYmxlc19wYWdpbmF0ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICYuZGF0YVRhYmxlLnRhYmxlLXNtIHtcclxuICAgICAgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNvcnRpbmc6YmVmb3JlLCAuc29ydGluZ19hc2M6YmVmb3JlLCAuc29ydGluZ19kZXNjOmJlZm9yZSB7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDAuODVlbTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc29ydGluZzphZnRlciwgLnNvcnRpbmdfYXNjOmFmdGVyLCAuc29ydGluZ19kZXNjOmFmdGVyIHtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJi50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUge1xyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoOmxhc3QtY2hpbGQsIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB0Ym9keSB7XHJcbiAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGRpdiB7XHJcbiAgICAmLmRhdGFUYWJsZXNfc2Nyb2xsSGVhZCB0YWJsZS50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLnRhYmxlLXJlc3BvbnNpdmUgPiBkaXYuZGF0YVRhYmxlc193cmFwcGVyID4gZGl2LnJvdyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICBcclxuICAgICAgPiBkaXZbY2xhc3NePVwiY29sLVwiXSB7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/argon.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/assets/scss/argon.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXFRhbWFzXFxEZXNrdG9wXFxOdW92YSBjYXJ0ZWxsYVxcc21hcnRpS2V0dGUvc3JjXFxzdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss":
/*!*************************************************************************!*\
  !*** ./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!../../sass-loader/dist/cjs.js??ref--15-3!./dataTables.bootstrap4.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/scss/argon.scss":
/*!************************************!*\
  !*** ./src/assets/scss/argon.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./argon.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/argon.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************************************************************************************************************!*\
  !*** multi ./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss ./src/styles.scss ./src/assets/scss/argon.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Tamas\Desktop\Nuova cartella\smartiKette\node_modules\datatables.net-bs4\scss\dataTables.bootstrap4.scss */"./node_modules/datatables.net-bs4/scss/dataTables.bootstrap4.scss");
__webpack_require__(/*! C:\Users\Tamas\Desktop\Nuova cartella\smartiKette\src\styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! C:\Users\Tamas\Desktop\Nuova cartella\smartiKette\src\assets\scss\argon.scss */"./src/assets/scss/argon.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map