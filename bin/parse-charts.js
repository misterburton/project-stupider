#!./node_modules/.bin/babel-node --

'use strict';

import _ from 'lodash';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const dataDir = path.resolve(__dirname, '..', 'data');

const workbook = XLSX.readFileSync(path.resolve(dataDir, 'charts.xls'));
const sheetName = workbook.SheetNames[1];
const sheet = workbook.Sheets[sheetName];
const jsonSheet = XLSX.utils.sheet_to_json(sheet);

const cleanSheet = _(jsonSheet)
  .map(song => {
    return {
      artist: song.Artist,
      album: song.Album,
      track: song.Track,
      time: song.Time,
      temp1: parseInt(song['Temp 1']),
      year: song.Year,

      // parse M/D/YY into ISO using moment?
      dateEntered: song['Date Entered'],
      datePeaked: song['Date Peaked']
    };
  })
  .value();

fs.writeFileSync(path.resolve(dataDir, 'charts.json'), JSON.stringify(cleanSheet, null, 2));
