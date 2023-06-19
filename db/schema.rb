# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_17_131425) do
  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.integer "merchant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clerks", force: :cascade do |t|
    t.string "name"
    t.integer "admin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_clerks_on_admin_id"
  end

  create_table "item_admins", force: :cascade do |t|
<<<<<<< HEAD
    t.integer "item_id", null: false
    t.integer "admin_id", null: false
    t.string "payment_status"
    t.string "condition_of_item"
=======
    t.string "name"
    t.integer "admin_id"
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
<<<<<<< HEAD
    t.integer "stock_number"
    t.string "image_url"
=======
    t.integer "quantity"
    t.integer "destroyed_items"
    t.string "status_of_item"
    t.integer "buying_price"
    t.integer "selling_price"
    t.integer "item_admin_id"
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "merchants", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

<<<<<<< HEAD
  add_foreign_key "admins", "merchants"
  add_foreign_key "clerks", "admins"
  add_foreign_key "item_admins", "admins"
  add_foreign_key "item_admins", "items"
=======
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
end
