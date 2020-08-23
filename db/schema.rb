# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_23_090101) do

  create_table "course_tables", id: :string, force: :cascade do |t|
    t.string "name"
  end

  create_table "courses", id: :string, force: :cascade do |t|
    t.string "name"
  end

  create_table "lesson_block_tables", force: :cascade do |t|
    t.string "type"
    t.integer "course_id"
    t.index ["course_id"], name: "index_lesson_block_tables_on_course_id"
  end

  create_table "lesson_blocks", force: :cascade do |t|
    t.string "type"
    t.integer "course_id"
    t.index ["course_id"], name: "index_lesson_blocks_on_course_id"
  end

  create_table "lesson_slot_tables", force: :cascade do |t|
    t.integer "day"
    t.integer "shift_id"
    t.integer "start_id"
    t.integer "end_id"
    t.string "room"
    t.index ["end_id"], name: "index_lesson_slot_tables_on_end_id"
    t.index ["shift_id"], name: "index_lesson_slot_tables_on_shift_id"
    t.index ["start_id"], name: "index_lesson_slot_tables_on_start_id"
  end

  create_table "lesson_slots", force: :cascade do |t|
    t.integer "day"
    t.integer "shift_id"
    t.integer "start_id"
    t.integer "end_id"
    t.string "room"
    t.index ["end_id"], name: "index_lesson_slots_on_end_id"
    t.index ["shift_id"], name: "index_lesson_slots_on_shift_id"
    t.index ["start_id"], name: "index_lesson_slots_on_start_id"
  end

  create_table "shift_tables", force: :cascade do |t|
    t.string "name"
    t.integer "lesson_block_id"
    t.index ["lesson_block_id"], name: "index_shift_tables_on_lesson_block_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.string "name"
    t.integer "lesson_block_id"
    t.index ["lesson_block_id"], name: "index_shifts_on_lesson_block_id"
  end

  create_table "time_tables", force: :cascade do |t|
    t.integer "hour"
    t.integer "minutes"
  end

  create_table "times", force: :cascade do |t|
    t.integer "hour"
    t.integer "minutes"
  end

  add_foreign_key "lesson_slots", "times", column: "end_id"
  add_foreign_key "lesson_slots", "times", column: "start_id"
end
