#!/bin/bash

yarn install
yarn sequelize db:migrate

node $@